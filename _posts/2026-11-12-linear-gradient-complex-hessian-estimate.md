---
layout: paper
title: A second-order estimate linear in the gradient for complex Hessian equations
title_ja: 複素Hessian方程式の勾配に線形な二階評価
authors: Liding Huang, Jiaogen Zhang, Xi Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
arxiv_abstract: We use the maximum principle to prove a second-order estimate with linear dependence on the gradient for the nondegenerate complex Hessian equation on a compact Kähler manifold. The proof combines $C^0$ compactness and a refined concavity inequality with the use of nearby smooth admissible functions. A standard interpolation argument then yields the known uniform gradient and complex Hessian bounds.
topic: differential-geometry
tags:
- monge-ampere-equations
- pluripotential-theory
arxiv_id: 2611.11176v1
arxiv_url: https://arxiv.org/abs/2611.11176
arxiv_submitted: '2026-11-08'
arxiv_updated: '2026-11-08'
summary: コンパクトKähler多様体上の非退化複素Hessian方程式に対し、勾配の大きさに線形な二階評価を最大値原理で示す。解集合のC0コンパクト性と近傍の滑らかな許容関数を用い、補間で勾配評価を閉じる。
abstract_en: We use the maximum principle to prove a second-order estimate with linear dependence on the gradient for the nondegenerate complex Hessian equation on a compact Kähler manifold. The proof combines $C^0$ compactness and a refined concavity inequality with the use of nearby smooth admissible functions. A standard interpolation argument then yields the known uniform gradient and complex Hessian bounds.
summary_en: ''
abstract_ja: 非退化な複素Hessian方程式について、最大値原理を用いて勾配に線形に依存する二階評価を証明する。対象はコンパクトKähler多様体上の滑らかな許容解であり、密度の正の下界とC2評価、解の振幅評価を仮定する。C0コンパクト性、改良した凹性不等式、近傍の滑らかな許容関数を組み合わせるのが証明の要点である。この線形評価に標準的な補間を適用し、既知の一様勾配評価と複素Hessian評価を回収する。
abstract_source_url: https://arxiv.org/abs/2611.11176
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.11176v1](https://arxiv.org/abs/2611.11176)
- **著者:** Liding Huang, Jiaogen Zhang, Xi Zhang
- **初回投稿日:** 2026-11-08
- **最終更新日:** 2026-11-08
- **主分類・副分類:** math.DG（主分類）; math.AP
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

複素Hessian方程式では、二階微分を勾配の二乗で抑える評価が重要な役割を果たしてきた。しかし、その形では勾配自身の評価を別の方法で補う必要がある。勾配に線形な依存まで改善できれば、補間によって評価を閉じられる。

本論文は、コンパクトKähler多様体上の非退化複素 $k$-Hessian方程式で、その線形な二階評価を最大値原理から導く。密度が零から一様に離れ、二階まで制御され、解の振幅が抑えられているという仮定の下で、解ごとによらない定数を得る。

重要なのは解のすぐ近くにある滑らかな許容関数との比較である。解集合の $C^0$ コンパクト性を使って比較関数を有限個で済ませ、最大値原理の局所的な計算を一様な評価にする。勾配と複素Hessianの一様有界性自体は既知であり、新しい点は線形な二階評価とそれを通じる証明経路にある。

## 背景と問題設定

$(M,\omega)$ は複素次元 $n\ge2$ のコンパクトKähler多様体とする。$\omega\_u=\omega+i\partial\bar\partial u$、$A\_u=\omega^{-1}\omega\_u$ と置き、固有値を $\lambda(A\_u)$ と書く。$2\le k\le n$ に対して

$$
\sigma\_k(\lambda(A\_u))^{1/k}=h>0,\qquad\sup\_Mu=0,\qquad\lambda(A\_u)\in\Gamma\_k
$$

を考える。$\Gamma\_k=\lbrace \lambda:\sigma\_j(\lambda)>0\ (1\le j\le k)\rbrace $ は許容錐である。同値な外積表示は

$$
\omega\_u^k\wedge\omega^{n-k}=\psi\omega^n,\qquad
\psi=\frac{h^k}{\binom nk}
$$

となる。Hou–Ma–Wuの二次的な勾配依存の評価を起点とする従来法に対し、ここでは二階評価を先に線形化し、補間で勾配を吸収する。

## 主結果

### 勾配に線形な二階評価（Theorem 1.1）

正定数 $H\_1,H\_2,U$ を固定し、滑らかな許容解が

$$
h\ge H\_1>0,\qquad\Vert h\Vert\_{C^2(M)}\le H\_2,\qquad
\operatorname{osc}\_M u\le U
$$

を満たすとする。$\mathcal D=(M,\omega,n,k,H\_1,H\_2,U)$ のみに依存する定数 $C$ が存在し、最大固有値について

$$
\sup\_M\lambda\_1(A\_u)\le C\left(1+\sup\_M|\nabla u|\_\omega^2\right)^{1/2}
$$

が成り立つ。従って

$$
\sup\_M\Delta\_\omega u\le C\left(1+\sup\_M|\nabla u|\_\omega\right)
$$

を得る。密度の正の下界を含む非退化の仮定があり、退化する密度まで一様に扱う定理ではない。

### 補間による閉じた評価（Corollary 1.2）

同じ仮定の下で

$$
\Vert\nabla u\Vert\_{L^\infty(M)}+
\Vert\partial\bar\partial u\Vert\_{L^\infty(M)}\le C(\mathcal D)
$$

となる。線形な依存のため勾配項を補間で吸収できることが、二階評価とこの系を結ぶ。ここで評価しているのは複素Hessianであり、主張を無条件の全実Hessian評価へ広げない。

## 証明の見取り図

最大固有値の対数に最大値原理を適用する際、三階項と凹性を捨てずに利用した改良下界を使う。さらに $u$ に一様に近い滑らかな許容関数 $v$ を選び、$u-v$ の二乗を含む補助関数を導入する。この項が、単に $u$ だけから作る補助関数では得にくい符号を与える。

比較評価には $v$ の勾配も現れるが、勾配や二階評価に依存しない既知の $C^0$ 前コンパクト性により、解集合を有限個の近傍で覆える。その代表関数を使うことで、個々の解に依存しない定数にできる。最後に標準的な補間を用いる。この方法は、勾配の事前評価、Hou–Ma–Wu評価、Green関数を証明の入力としない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.11176)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.11176v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem 1.1; Corollary 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.11176v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
