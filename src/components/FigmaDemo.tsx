const imgFrame1 = "https://www.figma.com/api/mcp/asset/7075973b-7957-4f38-98da-c7476f016056";

export default function FigmaDemo() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: '486px'
    }} data-node-id="1001:2">
      <img
        alt="Figma Frame 1 - Design with red square and blue circle"
        style={{
          display: 'block',
          maxWidth: 'none',
          width: '100%',
          height: '100%'
        }}
        src={imgFrame1}
      />
    </div>
  );
}
