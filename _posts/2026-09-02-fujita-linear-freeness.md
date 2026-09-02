---
layout: paper
title: "A linear bound for Fujita's freeness conjecture"
title_ja: "Fujita自由性予想に対する線形上界"
authors: "Jingjun Han"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $X$ be a smooth complex projective variety of dimension $n$, and let $L$ be an ample Cartier divisor. We prove that $K_X+mL$ is globally generated for every integer $m\geq\lceil C_0n\rceil$, where $C_0=1.77629\ldots$ is an explicit constant. In particular, $K_X+2nL$ is globally generated. Our main input is a new estimate for the multiplicity of a minimal log canonical center. If $(X,Δ)$ is log canonical near a closed point $x$ but is not klt at $x$, and $W$ is the positive-dimensional minimal log canonical center through $x$, then $2\overline{e}_1(\mathfrak m_{W,x})\leq\bigl(\dim W-\operatorname{lct}_x((X,Δ);\mathfrak m_x)\bigr)\operatorname{mult}_xW$, where $\overline{e}_1(\mathfrak m_{W,x})$ is the first normal Hilbert coefficient of the maximal ideal of $\mathcal O_{W,x}$. This implies $\operatorname{mult}_xW\leq \frac{(a+c)^{a+c}}{a^ac^c}$, where $a:=\frac{\dim W-\operatorname{lct}_x((X,Δ);\mathfrak m_{x})}{2}$ and $c:=\operatorname{edim}\mathcal O_{W,x}-\dim W$.
topic: algebraic-geometry
tags:
  - singularities
  - positivity
  - multiplier-ideals-extension
arxiv_id: "2609.01574v1"
arxiv_url: "https://arxiv.org/abs/2609.01574"
arxiv_submitted: "2026-09-01"
arxiv_updated: "2026-09-01"
summary: >-
  滑らかな $n$ 次元射影多様体とample Cartier因子 $L$ に対し、随伴束 $K_X+mL$ が $m\geq\lceil1.77629\ldots n\rceil$ で大域生成されることを示す。最小log canonical centerの重複度を連続的に制御する新不等式により、Fujita自由性予想に初の次元線形な一般上界を与える。
abstract_en: ""
summary_en: >-
  The paper gives the first general bound of linear order in the dimension for global generation in Fujita's freeness problem. Its key local ingredient controls the multiplicity of a minimal log canonical center through the first normal Hilbert coefficient and a local threshold. The continuous dependence of this estimate permits the coefficients accumulated while cutting down log canonical centers to be bounded by an explicit integral. Nadel vanishing then turns the resulting isolated center into pointwise generation of the adjoint bundle.
abstract_ja: >-
  $n$ 次元の滑らかな複素射影多様体 $X$ とample Cartier因子 $L$ について、$K_X+mL$ は $m\geq\lceil C_0n\rceil$、$C_0=1.77629\ldots$ で大域生成される。主要な入力は、正次元の最小log canonical centerの重複度を局所log canonical thresholdと第一正規Hilbert係数で評価する不等式である。特に簡明な帰結として $K_X+2nL$ の大域生成を得る。
abstract_source_url: "https://arxiv.org/abs/2609.01574"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.01574](https://arxiv.org/abs/2609.01574)
- **著者:** Jingjun Han
- **初回投稿日:** 2026年9月1日
- **最終更新日:** 2026年9月1日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fujitaの自由性予想は、$n$ 次元の滑らかな射影多様体とample Cartier因子 $L$ に対し、$K_X+mL$ が $m\geq n+1$ で大域生成されると予想する。従来の任意次元における最良の一般上界には $n\log\log n$ の因子が残っていた。

本論文は、明示的定数 $C_0=1.77629988\ldots$ によって $m\geq\lceil C_0n\rceil$ ならば大域生成が成り立つことを示す。これは次元に線形な最初の一般上界であり、予想との差を増大度ではなく先頭定数の問題に縮める。

鍵は、一点 $x$ を通る最小log canonical center $W$ の重複度に対する連続的な評価である。これをlc centerを次元ごとに切り下げる帰納に組み込み、加える因子の係数の総和を積分で制御する。

## 背景と問題設定

Angehrn–Siuの方法は、固定点 $x$ を通るlc centerを有効因子で逐次切り下げ、$\{x\}$ が孤立lc centerになった段階でNadel消滅を使う。従来は特異なcenterの重複度を十分精密に制御できず、係数の総和が超線形となっていた。

## 主結果

### 線形自由性上界（Theorem 1.1, Corollary 1.2）

$$
C_0:=\int_0^{\varphi^{-2}}\frac{2\{-z\log z-(1-z)\log(1-z)\}}{z^{3/2}\log^2z}\,dz
=1.77629988\ldots,
\qquad \varphi=\frac{1+\sqrt5}{2}.
$$

$m\geq\lceil C_0n\rceil$ ならば $K_X+mL$ は大域生成される。とくに $K_X+2nL$ は大域生成される。

### 最小lc centerの重複度評価（Theorems 1.3, 1.4）

$d=\dim W$、$b=\operatorname{lct}_x((X,\Delta);\mathfrak m_x)$、$a=(d-b)/2$、$c=\operatorname{edim}\mathcal O_{W,x}-d$ とおくと

$$
2\overline e_1(\mathfrak m_{W,x})\leq(d-b)\operatorname{mult}_xW,
\qquad
\operatorname{mult}_xW\leq\frac{(a+c)^{a+c}}{a^ac^c}.
$$

後者が $b$ に連続的に依存する点が、切り下げ過程を積分評価に変換する新規性である。

## 証明の見取り図

高次元次の準随により $(K_X+\Delta)|_W\sim_{\mathbb Q}K_W+B_W+M_W$ を用い、法部分のnef性と正規化blow-up上のRiemann–Roch比較から第一正規Hilbert係数の不等式を導く。それをlc center切り下げの各段階に適用し、必要係数を $C_0n$ 未満に抑える。最後にNadel消滅が $x$ で消えない大域切断を与える。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.01574](https://arxiv.org/abs/2609.01574)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.3, 1.4; Corollary 1.2
- **論文構成の説明:** Introduction, pp. 4–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
