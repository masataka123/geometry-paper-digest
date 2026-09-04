---
layout: paper
title: "Lagrangian Foliations on compact Kähler manifolds"
title_ja: "コンパクトKähler多様体上のLagrangian葉層"
authors: "Fabio Podestà"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We prove that a compact Kähler manifold carrying a regular Riemannian foliation whose leaves are Lagrangian and minimal is flat. In order to prove this result, we establish a foliated version of an integral formula due to Ros.
topic: differential-geometry
tags:
  - foliations
  - curvature
arxiv_id: "2609.01142v1"
arxiv_url: "https://arxiv.org/abs/2609.01142"
arxiv_submitted: "2026-09-01"
arxiv_updated: "2026-09-01"
summary: >-
  コンパクトKähler多様体が、葉がLagrangianかつ極小である正則Riemann葉層を持つなら、計量は平坦であることを示す。極小性からRicci平坦性を導き、葉層版Ros積分公式によって第二基本形式を消滅させるため、平坦複素トーラス型の標準例を特徴づける剛性定理となる。
abstract_en: ""
summary_en: >-
  The paper establishes a rigidity criterion for a compact Kähler manifold equipped with a regular Riemannian foliation. When every leaf is both Lagrangian and minimal, the ambient metric must be flat. The argument first turns the geometric assumptions into Ricci flatness and then introduces a foliated analogue of Ros's integral identity to eliminate the remaining second fundamental form.
abstract_ja: >-
  正則Riemann葉層を持つコンパクトKähler多様体を考え、その葉がLagrangianかつ極小ならば多様体の計量が平坦になることを示す。証明のために、Rosによる積分公式の葉層版を確立する。
abstract_source_url: "https://arxiv.org/abs/2609.01142"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.01142](https://arxiv.org/abs/2609.01142)
- **著者:** Fabio Podestà
- **初回投稿日:** 2026年9月1日
- **最終更新日:** 2026年9月1日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトKähler多様体 $(M,g,J)$ 上で、葉がLagrangian部分多様体となる正則Riemann葉層を考える。この対象はシンプレクティック幾何と葉層幾何の接点にあり、平坦複素トーラスが基本例を与える。しかしRiemann性とLagrangian性だけでは、非平坦な例を排除できない。

本論文の主定理は、全ての葉が極小であるという追加仮定の下で $(M,g)$ が平坦になると述べる。従来のHamilton--Kotschickの結果は葉層が平行であることを仮定していたが、本結果はより弱いRiemann性と極小性から平行性そのものを導く。

証明では、Kähler条件とbundle-like条件により一方のO'Neill tensorを消し、直交分布が可積分かつ全測地的であることを示す。さらにLagrangian分解が第一Chern類を実コホモロジーで消し、極小性がscalar flatnessを与えることからRicci平坦性を得る。

最後にRosの積分公式を葉層に適合させ、第二基本形式を符号付き誤差なしの非負量の積分へ組み込む。この大域積分が第二基本形式の消滅を強制する。コンパクト性はこの議論に本質的であり、Introductionでは完備非コンパクトの場合への拡張は未解決として残される。

## 背景と問題設定

葉層の接分布を $\mathcal V$、その直交補を $\mathcal H=\mathcal V^\perp=J\mathcal V$ とする。平行Lagrangian葉層を持つKähler計量が平坦であることは既知である一方、平行性を仮定しない分類は得られていなかった。特異葉を許せばtoric多様体に広い例があるため、本論文は正則葉層に限定し、極小性が必要な剛性を回復するかを問う。

O'Neill tensorを $A,T$ とすると、Kähler条件とRiemann葉層の条件から $A=0$ となる。残る外在幾何は、垂直ベクトル $U,V,W$ に対する対称三次tensor

$$
S(U,V,W)=g(T_UV,JW)
$$

に符号化される。葉の平均曲率ベクトルを $N$ とすれば

$$
\operatorname{Scal}=2\operatorname{div}N
$$

である。また複素ベクトル束として $(TM,J)\simeq\mathcal V\otimes_{\mathbb R}\mathbb C$ なので、$c_1(M)=0$ が実コホモロジーで成り立つ。

## 主結果

### 平坦性定理（Theorem 1.1）

$(M,g,J)$ をコンパクトKähler多様体とし、$\mathcal F$ を正則Riemann葉層とする。各葉がLagrangianかつ極小ならば、結論として

$$
(M,g)\text{ is flat}
$$

が成り立つ。特に、極小性は葉層の第二基本形式 $T$ を消滅させて葉層を平行にする十分条件である。この点で、平行性を最初から置いた既知の平坦性定理を強化する。

極小性 $N=0$ とscalar curvatureの発散公式から計量はscalar-flatとなる。コンパクトKähler性と $c_1(M)=0$ を合わせるとRicci formも消え、$g$ はRicci-flatである。ただしRicci平坦性だけでは結論に足りず、次の積分公式が残るtensor $T$ を消す。

## 証明の見取り図

$A=0$ により $\mathcal H$ は可積分で、その葉は全測地的となる。水平単位球面束 $U\mathcal H$ 上の水平測地vector fieldを考えると、自然な測度に関するその発散は $-g(N,v)$ である。したがって極小性は水平測地流を測度保存にし、任意の共変tensor $Q$ に対するRos型の葉層積分公式を可能にする。

$S$ の水平共変微分から対称trace-free四次tensor $C$ を作り、$S\otimes C$ の対称化へ積分公式を適用する。Introductionに示された計算は

$$
0=\int_M\left(
|C|^2+\left|\sum_iB_i^2\right|^2+\sum_{i,j}|[B_i,B_j]|^2
\right)d\mu_M
$$

へ帰着する。各項が非負であるため全てが消え、$B=0$、同値に $T=0$ となる。葉層が平行になり、既知の平坦性議論が適用される。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.01142](https://arxiv.org/abs/2609.01142)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem 1.1
- **論文構成の説明:** Introduction, pp. 1–2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
