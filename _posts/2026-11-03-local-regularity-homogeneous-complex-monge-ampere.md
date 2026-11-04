---
layout: paper
title: On the Local Regularity of Homogeneous Complex Monge-Ampère Equations
title_ja: 斉次複素Monge–Ampère方程式の局所高階正則性
authors: Qi Yao
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
- math.CV
arxiv_abstract: We establish a local higher regularity theorem for the homogeneous complex Monge-Ampere equation on $X\times D$, where $X$ is a complete, possibly noncompact Kahler manifold and $D\subset\mathbb C$ is the unit disc. For a bounded weak solution given by the Perron envelope, we prove higher regularity on a smaller spatial domain when the smooth boundary data are locally small. The geometric hypotheses require uniformly convex local Kahler potentials and a local barrier threshold sufficiently large relative to the global $L^\infty$ bound of the solution. We also obtain quantitative local Holder estimates. The proof combines a perturbative construction of local holomorphic disc foliations with a construction of global subsolutions using convexity and barriers. A key analytic difficulty is the loss of Holder regularity in the construction of holomorphic disc families, which we address using BMO estimates and Nash-Moser-Zehnder theorems. Comparison along the discs identifies the
  local smooth solution by holomorphic discs foliation with the global weak solution. We apply the theorem and its proof to compact Kahler manifolds and to ALE, ALF, and asymptotically complex hyperbolic (ACH) ends. Under the stated geometric and decay assumptions, we obtain higher regularity of each prescribed order sufficiently far out, together with weighted Holder estimates preserving the boundary decay.
topic: differential-geometry
tags:
- monge-ampere-equations
- pluripotential-theory
- noncompact-kahler-geometry
arxiv_id: 2611.00736v1
arxiv_url: https://arxiv.org/abs/2611.00736
arxiv_submitted: '2026-10-31'
arxiv_updated: '2026-10-31'
summary: 完備Kähler多様体と円板の積上の斉次複素Monge–Ampère方程式を調べる。有界Perron解について、局所的に小さい境界値と一様凸性・障壁条件から小領域での高階正則性とHölder評価を得る。
abstract_en: ''
summary_en: The article isolates conditions under which a weak solution acquires higher regularity in a spatial subdomain. Smallness is imposed on local boundary data, while a barrier must dominate the global size of the solution. Holomorphic discs first provide a candidate local solution. A comparison with a globally admissible subsolution then identifies it with the Perron envelope.
abstract_ja: 非コンパクトでもよい完備Kähler多様体上で、Perron包絡として与えられた有界弱解の局所正則性を扱う。局所Kählerポテンシャルの一様凸性と、解の大域的上界に比べて十分大きい障壁閾値を仮定すると、境界値が局所的に小さい領域の内側で高階正則性を得る。証明は正則円板の局所族と大域的劣解の比較による。所定の幾何学的条件と減衰条件のもとでALE・ALF・ACH端への応用も論じる。
abstract_source_url: https://arxiv.org/abs/2611.00736
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.00736v1](https://arxiv.org/abs/2611.00736)
- **著者:** Qi Yao
- **初回投稿日:** 2026-10-31
- **最終更新日:** 2026-10-31
- **主分類・副分類:** math.DG（主分類）; math.AP, math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kählerポテンシャルの空間の測地線は、斉次複素Monge–Ampère方程式と結びつく。一般の境界値から得られる弱解に高階正則性を期待することはできないが、十分小さい摂動では状況が改善する。本論文は小ささを空間全体でなく局所的に課した場合を調べる。

対象は完備Kähler多様体 $X$ と円板 $D$ の積である。有界弱解がPerron包絡として得られると仮定し、局所Kählerポテンシャルの一様凸性と障壁条件を課す。局所境界値が十分小さければ、その内側で高階正則性が得られる。

非コンパクト端では、無限遠で障壁が大きくなり境界値が小さくなる状況に応用できる。ただし、任意の非コンパクトKähler多様体や任意の弱解に無条件で適用できるものではない。

## 背景と問題設定

$\Omega=\pi\_X^\ast \omega$ として、円板上のDirichlet問題

$$
(\Omega+i\partial\bar\partial\Phi)^{n+1}=0,\qquad
\Omega+i\partial\bar\partial\Phi\geq0,\qquad
\Phi|\_{X\times\partial D}=\Psi
$$

を扱う。境界値は滑らかで、各切片は厳密なKählerポテンシャルである。$\Phi$ は有界な許容劣解のPerron包絡であり、$\Vert \Phi\Vert \_{L^\infty}\leq M$ を満たすと仮定する。

$V\Subset U$ の各点で、同心正則座標球の半径差が一様に $R\_0$ 以上あり、局所ポテンシャル $\rho$ のEuclid Hessianが $\nabla\_0^2\rho\geq\lambda I$ を満たすとする。重要な障壁条件は

$$
\lambda R\_0^2\geq16M
$$

である。境界値の小ささ以外にも、この局所幾何と大域的上界の関係が必要になる。

## 主結果

### 局所高階正則性（Theorem A）

上の仮定と所定の一様な座標・ポテンシャル評価のもと、$k\geq1$、$0<\beta<\alpha<1$ を固定する。ある $\varepsilon>0$ が存在し、

$$
\Vert \Psi\Vert \_{C^{k+3,\alpha}(U\times\partial D)}\leq\varepsilon
$$

なら、$\Phi$ は $V\times D$ で局所的に滑らかとなり、

$$
\Vert \Phi\Vert \_{C^{k,\beta}(V\times D)}
\leq C\Vert \Psi\Vert \_{C^{k+1,\alpha}(U\times\partial D)}
$$

を満たす。定数は指定された幾何学的データや $M$ に依存する。$U$ 外で境界値の小ささは課さないが、有界なPerron解という大域的仮定は維持する。

### 正則円板族の構成（Theorem B）

一様な局所幾何を持つ $N\Subset N'$ で、$\Vert \partial\Psi\Vert \_{k+2,\alpha;N'\times\partial D}$ が十分小さいなら、境界値に適合するHCMA円板族 $G$ が存在する。自明な族 $G\_0$ からの差は

$$
\Vert G-G\_0\Vert \_{k,\beta;N\times D}
\leq C\Vert \partial\Psi\Vert \_{k,\alpha;N'\times\partial D}
$$

で制御される。指数を $\alpha$ から $\beta$ に下げることが、パラメータ付き円板の評価に現れる。

### 大域的劣解との同定（Theorem C）

局所凸性、障壁条件、局所境界値の小ささを満たすと、$X\times D$ 上の有界な $\Omega$-多重劣調和劣解 $F$ が存在し、小領域 $N\times D$ では滑らかで

$$
F=\Phi
$$

となる。局所円板から作った解を、もともとの大域的弱解と結びつける結果である。

## 証明の見取り図

まず境界値を正則余接束から作るアフィン束上の境界条件へ変え、正則円板の葉層を構成する。線形化はパラメータ付きRiemann–Hilbert問題となり、Hölder指数の損失をBMO評価とNash–Moser–Zehnder反復で扱う。

次に凸性から支持関数を作り、障壁によって外側境界近くで $-M$ 以下にする。これを貼り合わせた大域的劣解とPerron包絡を、円板上の最大原理で両側から比較する。ALE・ALF端では増大する障壁と境界値の減衰、ACH端では双曲距離の障壁を用いると序論は説明する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.00736)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.00736v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems A, B, C
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.00736v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
