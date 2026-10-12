---
layout: paper
title: Non-Archimedean balanced metrics and their application to totally degenerate abelian varieties
title_ja: 完全退化アーベル多様体上の非アルキメデス的balanced計量
authors: Keita Goto
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
- math.NT
arxiv_abstract: For a polarized complex manifold with discrete automorphism group, it is known that if the first Chern class admits a cscK metric, then the balanced metrics, which are characterized in terms of the algebro-geometric notion of Chow stability, approximate this cscK metric. In this paper, we study a non-Archimedean analogue of this phenomenon. In particular, we prove that such an analogue holds for polarized totally degenerate abelian varieties. As an application, we also show that, for a totally degenerating family of polarized abelian varieties, the validity of this non-Archimedean analogue yields a uniform estimate for the Calabi--Yau metrics on fibers sufficiently close to the degenerate fiber.
topic: algebraic-geometry
tags:
- calabi-yau-geometry
- pluripotential-theory
- monge-ampere-equations
- csck-extremal-kahler-metrics
arxiv_id: 2606.15758v2
arxiv_url: https://arxiv.org/abs/2606.15758
arxiv_submitted: '2026-06-14'
arxiv_updated: '2026-10-08'
summary: 完全退化した偏極アーベル多様体について、非アルキメデス的balanced計量の存在・一意性とCalabi–Yau計量への二次の収束評価を示す。複素ファイバーとのhybrid幾何を介して、退化点近くでのCalabi–Yauポテンシャルの一様近似へ応用する。
abstract_en: ''
summary_en: Goto studies how algebraically defined balanced metrics recover a canonical non-Archimedean metric. Totally degenerate abelian varieties permit an explicit construction through theta functions and a discrete Legendre transform. This gives a quadratic approximation rate and connects the non-Archimedean picture to complex Calabi–Yau metrics in a degenerating family. The resulting uniform estimate applies near the singular parameter, with the permitted neighbourhood potentially depending on the approximation level.
abstract_ja: 複素幾何でbalanced計量が標準計量を近似する現象を、非アルキメデス的な完全退化アーベル多様体で実現する。新しいbalanced計量を残余Chow安定性から構成し、theta関数による表示と離散Legendre変換を用いてCalabi–Yau計量への収束速度を評価する。さらに複素側と非アルキメデス側を結ぶhybrid計量を構成し、退化ファイバーに近い複素ファイバー上でスケールを調整したポテンシャルの一様評価を得る。ただし近傍円板の半径は近似のレベルに依存し得る。
abstract_source_url: https://arxiv.org/abs/2606.15758
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.15758v2](https://arxiv.org/abs/2606.15758)
- **著者:** Keita Goto
- **初回投稿日:** 2026-06-14
- **最終更新日:** 2026-10-08
- **主分類・副分類:** math.AG（主分類）; math.DG, math.NT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素多様体上では、代数幾何的な安定性と結び付くbalanced計量によって標準的なKähler計量を近似する考え方がある。本論文は、この有限次元的な近似を非アルキメデス幾何へ移し、完全退化した偏極アーベル多様体に対して実現する。

非アルキメデス的Calabi–Yau計量はMonge–Ampère方程式から定義される解析的な対象である。これに対し本論文は、残余Chow安定性を用いてbalanced計量を構成し、theta関数による明示的な形を得る。さらにレベルを上げたときの収束速度まで評価する。

応用では、複素ファイバーと非アルキメデス的な中心ファイバーを同時に含むhybrid空間を用いる。両側のbalanced計量を結び、退化点近くの複素Calabi–Yauポテンシャルの一様近似を導く。ただし、近似レベルを変えても同じ近傍円板を使えるかは未解決として残る。

## 背景と問題設定

<p>$K=\mathbb C((t))$ に $|t|_K=e^{-1}$ の付値を入れ、偏極多様体 $(X,L)$ のBerkovich解析化を考える。最大退化と半安定還元の状況ではessential skeleton上の標準確率測度 $\mu$ を用いて</p>

<div>
$$
\operatorname{MA}(\phi_{\mathrm{NACY}})=(L^{\dim X})\mu
$$
</div>

<p>を満たす非アルキメデス的Calabi–Yau計量が、定数の加算を除いて一意に定まる。論文の目的はこの解析的計量を代数的な構成から理解することである。</p>

<p>$K$ は代数閉体ではないため、既存のcritical metricの概念をそのまま使わず、代数閉包の完備化への引き戻しがcriticalであり、さらに相対的very ampleなモデルから生じる非アルキメデス的Fubini–Study計量を、レベル $k$ のbalanced計量と定義する。</p>

## 主結果

### 主定理A：存在・一意性（Theorem A）

<p>$(X,L)$ が $K$ 上の完全退化した偏極アーベル多様体なら、十分大きな $k$ に対しレベル $k$ の非アルキメデス的balanced計量 $\phi_k$ が存在し、定数の加算を除いて一意である。実際には $kL$ がvery ampleであればよく、$k\ge3$ で十分となる。</p>

この計量は正規化した特性付きtheta関数で記述される。Introductionはさらに、残余Chow安定性という純代数幾何的な性質を導入し、それがbalanced計量の存在・一意性を導くことを述べる。具体的なtheta関数の表示式は後の節に置かれているため、本記事では再構成しない。

### 主定理B：Calabi–Yau計量への収束（Theorem B）

<p>論文の正規化で $\phi_k$ は $\phi_{\mathrm{NACY}}$ に $C^0$ 位相で収束し、</p>

<div>
$$
\sup_{x\in X^{\mathrm{na}}}|\phi_{\mathrm{NACY}}-\phi_k|=O(k^{-2})
$$
</div>

となる。解析的に定まった標準計量が、安定性に基づく計量の極限として回復されるだけでなく、近似誤差がレベルの二乗の逆数で抑えられる。

### 主定理C：複素側と結ぶhybrid計量（Theorem C）

<p>穿孔円板上の完全退化する偏極アーベル多様体の族を考え、$c(t)=-1/\log|t|$ とする。十分大きな $k$ について、必要なら有限基底変換を行うと、hybrid空間上の連続半正計量 $\phi_k^{\mathrm{hyb}}$ が存在する。その非零ファイバーへの制限を</p>

<div>
$$
\phi_{k,t}^{\mathrm{hyb}}=c(t)^{-1}\phi_k^{\mathrm{hyb}}(t)
$$
</div>

<p>とスケールし直せば複素側のレベル $k$ のbalanced計量となり、中心への制限は非アルキメデス的balanced計量になる。有限基底変換は複素側の計量の族を確保するために使われ、非アルキメデス側の計量自体はその変換に依存しない。</p>

### 主定理D：退化点付近の一様評価（Theorem D）

<p>十分大きな $k$ に対し、必要に応じた有限基底変換と円板の縮小の後、すべての非零 $t$ で</p>

<div>
$$
\sup_{X_t}c(t)\left|\phi_t^{\mathrm{CY}}-\phi_{k,t}^{\mathrm{hyb}}\right|=O(k^{-2})
$$
</div>

<p>が成り立つ。ここで $\phi_t^{\mathrm{CY}}$ はCalabi–Yau計量のポテンシャルである。縮小後の半径は $k$ に依存してよく、独立に選べるかは不明と明記されている。また有限基底変換が必要なのは主定理Cの族の構成であり、この評価の証明自体のためではない。</p>

## 証明の見取り図

残余Chow安定性と変分的なKempf–Ness型の考え方でbalanced計量の存在・一意性を扱い、完全退化アーベル多様体の退化データとtheta関数によって計量を具体化する。

<p>Calabi–Yau計量は正定値二次形式のLegendre双対に対応するtoric計量として知られている。主な補題は $\phi_k$ をその二次形式のレベル $k$ の離散Legendre双対に対応させるものであり、離散近似が $O(k^{-2})$ の収束を与える。</p>

複素balanced計量の既知の表示と非アルキメデス側の表示を比較してhybrid計量を作る。その後、hybrid空間の位相的な性質に基づく補題を使い、中心ファイバーの近似評価を近傍の複素ファイバーでの一様評価へ移す。

## 原論文との対応

- **Abstractページ:** [Non-Archimedean balanced metrics and their application to totally degenerate abelian varieties](https://arxiv.org/abs/2606.15758)
- **Introduction:** [PDF](https://arxiv.org/pdf/2606.15758v2) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems A–D（Theorems 3.2.8, 3.3.3, 4.2.2および4.2.1の帰結）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2606.15758v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
