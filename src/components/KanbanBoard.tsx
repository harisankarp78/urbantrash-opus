import { useState, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Badge } from '@/components/ui/badge';

const initialNodes: Node[] = [
  // Discovery Column
  {
    id: 'discovery-header',
    type: 'group',
    position: { x: 0, y: 0 },
    style: {
      width: 280,
      height: 600,
      backgroundColor: 'hsl(var(--card))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '12px',
    },
    data: {},
    draggable: false,
  },
  {
    id: 'discovery-title',
    position: { x: 20, y: 20 },
    parentId: 'discovery-header',
    extent: 'parent',
    data: { 
      label: '🔍 Discovery & Planning',
      description: 'Understanding your business needs',
      count: 3
    },
    type: 'kanbanColumn',
    draggable: false,
  },
  {
    id: 'discovery-1',
    position: { x: 20, y: 100 },
    parentId: 'discovery-header',
    extent: 'parent',
    data: { 
      title: 'Business Analysis',
      priority: 'high',
      assignee: 'Strategy Team',
      timeline: '1-2 weeks'
    },
    type: 'kanbanCard',
    draggable: false,
  },
  {
    id: 'discovery-2',
    position: { x: 20, y: 220 },
    parentId: 'discovery-header',
    extent: 'parent',
    data: { 
      title: 'Technical Architecture',
      priority: 'high',
      assignee: 'Tech Lead',
      timeline: '1 week'
    },
    type: 'kanbanCard',
    draggable: false,
  },
  {
    id: 'discovery-3',
    position: { x: 20, y: 340 },
    parentId: 'discovery-header',
    extent: 'parent',
    data: { 
      title: 'Project Roadmap',
      priority: 'medium',
      assignee: 'PM Team',
      timeline: '3-5 days'
    },
    type: 'kanbanCard',
    draggable: false,
  },

  // Development Column
  {
    id: 'development-header',
    type: 'group',
    position: { x: 320, y: 0 },
    style: {
      width: 280,
      height: 600,
      backgroundColor: 'hsl(var(--card))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '12px',
    },
    data: {},
    draggable: false,
  },
  {
    id: 'development-title',
    position: { x: 20, y: 20 },
    parentId: 'development-header',
    extent: 'parent',
    data: { 
      label: '⚡ Development',
      description: 'Building your solution',
      count: 4
    },
    type: 'kanbanColumn',
    draggable: false,
  },
  {
    id: 'development-1',
    position: { x: 20, y: 100 },
    parentId: 'development-header',
    extent: 'parent',
    data: { 
      title: 'Backend Development',
      priority: 'high',
      assignee: 'Backend Team',
      timeline: '4-6 weeks'
    },
    type: 'kanbanCard',
    draggable: false,
  },
  {
    id: 'development-2',
    position: { x: 20, y: 220 },
    parentId: 'development-header',
    extent: 'parent',
    data: { 
      title: 'Frontend Development',
      priority: 'high',
      assignee: 'Frontend Team',
      timeline: '3-5 weeks'
    },
    type: 'kanbanCard',
    draggable: false,
  },
  {
    id: 'development-3',
    position: { x: 20, y: 340 },
    parentId: 'development-header',
    extent: 'parent',
    data: { 
      title: 'API Integration',
      priority: 'medium',
      assignee: 'Full-stack Dev',
      timeline: '1-2 weeks'
    },
    type: 'kanbanCard',
    draggable: false,
  },
  {
    id: 'development-4',
    position: { x: 20, y: 460 },
    parentId: 'development-header',
    extent: 'parent',
    data: { 
      title: 'Quality Assurance',
      priority: 'high',
      assignee: 'QA Team',
      timeline: '2-3 weeks'
    },
    type: 'kanbanCard',
    draggable: false,
  },

  // Deployment Column
  {
    id: 'deployment-header',
    type: 'group',
    position: { x: 640, y: 0 },
    style: {
      width: 280,
      height: 600,
      backgroundColor: 'hsl(var(--card))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '12px',
    },
    data: {},
    draggable: false,
  },
  {
    id: 'deployment-title',
    position: { x: 20, y: 20 },
    parentId: 'deployment-header',
    extent: 'parent',
    data: { 
      label: '🚀 Deployment & Launch',
      description: 'Going live with your product',
      count: 3
    },
    type: 'kanbanColumn',
    draggable: false,
  },
  {
    id: 'deployment-1',
    position: { x: 20, y: 100 },
    parentId: 'deployment-header',
    extent: 'parent',
    data: { 
      title: 'Production Setup',
      priority: 'high',
      assignee: 'DevOps Team',
      timeline: '3-5 days'
    },
    type: 'kanbanCard',
    draggable: false,
  },
  {
    id: 'deployment-2',
    position: { x: 20, y: 220 },
    parentId: 'deployment-header',
    extent: 'parent',
    data: { 
      title: 'Performance Testing',
      priority: 'medium',
      assignee: 'QA Team',
      timeline: '1 week'
    },
    type: 'kanbanCard',
    draggable: false,
  },
  {
    id: 'deployment-3',
    position: { x: 20, y: 340 },
    parentId: 'deployment-header',
    extent: 'parent',
    data: { 
      title: 'Go-Live Support',
      priority: 'high',
      assignee: 'Support Team',
      timeline: 'Ongoing'
    },
    type: 'kanbanCard',
    draggable: false,
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: 'discovery-header',
    target: 'development-header',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
  },
  {
    id: 'e2-3',
    source: 'development-header',
    target: 'deployment-header',
    type: 'smoothstep',
    animated: true,
    style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
  },
];

// Custom Column Node
const KanbanColumnNode = ({ data }: { data: any }) => {
  return (
    <div className="p-4 bg-muted/20 rounded-lg border-l-4 border-primary">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-lg text-foreground">{data.label}</h3>
        <Badge variant="secondary" className="text-xs">{data.count}</Badge>
      </div>
      <p className="text-sm text-muted-foreground">{data.description}</p>
    </div>
  );
};

// Custom Card Node
const KanbanCardNode = ({ data }: { data: any }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-destructive/10 border-destructive/20 text-destructive';
      case 'medium':
        return 'bg-accent/10 border-accent/20 text-accent-foreground';
      default:
        return 'bg-muted/10 border-muted/20 text-muted-foreground';
    }
  };

  return (
    <div className="p-4 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-sm text-foreground">{data.title}</h4>
        <Badge 
          variant="outline" 
          className={`text-xs ${getPriorityColor(data.priority)}`}
        >
          {data.priority}
        </Badge>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Assignee:</span>
          <span className="font-medium text-foreground">{data.assignee}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Timeline:</span>
          <span className="font-medium text-primary">{data.timeline}</span>
        </div>
      </div>
    </div>
  );
};

const nodeTypes = {
  kanbanColumn: KanbanColumnNode,
  kanbanCard: KanbanCardNode,
};

const KanbanBoard = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-[700px] rounded-xl border border-border bg-background/50 backdrop-blur-sm">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        proOptions={{ hideAttribution: true }}
        elementsSelectable={false}
        nodesDraggable={false}
        nodesConnectable={false}
        panOnDrag={true}
        zoomOnScroll={true}
        zoomOnDoubleClick={false}
        className="kanban-flow"
      >
        <Background 
          gap={20} 
          size={1} 
          color="hsl(var(--muted-foreground))"
          style={{ opacity: 0.3 }}
        />
        <Controls 
          showZoom={true}
          showFitView={true}
          showInteractive={false}
          className="react-flow__controls-custom"
        />
      </ReactFlow>
    </div>
  );
};

export default KanbanBoard;