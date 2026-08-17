---
layout: paper
title: "Nonnegative Ricci curvature and virtual abelianness in dimensions less than 12"
title_ja: "12次元未満における非負Ricci曲率と仮想可換性"
authors: "Dimitri Navarro, Jiayin Pan, Xingyu Zhu"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
topic: differential-geometry
tags:
  - curvature
  - fundamental-groups
arxiv_id: "2606.27724v1"
arxiv_url: "https://arxiv.org/abs/2606.27724v1"
arxiv_submitted: "2026-06-26"
arxiv_updated: "2026-06-26"
summary: >-
  非負Ricci曲率とsublinear diameter growthをもつ完備非コンパクト多様体の基本群を次元から制約する。基本群がrank $k$、step $s\geq2$ のtorsion-free nilpotent部分群を含めば $n\geq4s(s-1)+k+1$ と示し、特に $n<12$ なら基本群はalmost abelianとなる。
abstract_en: ""
summary_en: >-
  The authors derive a dimension obstruction for complete noncompact manifolds with nonnegative Ricci curvature and sublinear diameter growth. A torsion-free nilpotent subgroup of prescribed rank and step in the fundamental group forces a quantitative lower bound on the manifold's dimension. In particular, dimensions below twelve permit only virtually abelian fundamental groups. The proof passes through equivariant asymptotic cones and a synthetic dimension estimate for RCD spaces with nilpotent actions.
abstract_ja: >-
  非負Ricci曲率とsublinear diameter growthを仮定した完備非コンパクト多様体について、基本群内の非可換nilpotent部分群のstepとrankから多様体次元の下界を導く。その結果、12次元未満では基本群が有限indexの可換部分群をもつ。中心的な解析は、nilpotent Lie群が作用するRCD空間のsynthetic dimensionを軌道のHausdorff次元から評価することである。
abstract_source_url: "https://arxiv.org/abs/2606.27724v1"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2606.27724v1](https://arxiv.org/abs/2606.27724v1)
- **著者:** Dimitri Navarro, Jiayin Pan, Xingyu Zhu
- **初回投稿日:** 2026年6月26日
- **最終更新日:** 2026年6月26日（v1）
- **主分類・副分類:** Differential Geometry (math.DG)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非負断面曲率ではsoul theoremにより非コンパクト多様体の基本群はvirtually abelianだが、非負Ricci曲率だけでは任意の有限生成virtually nilpotent群が現れうる。本論文はsublinear diameter growthを追加し、非可換性が現れるために必要な次元を定量化する。

rank $k$、nilpotency step $s\geq2$ のtorsion-free nilpotent部分群があれば、次元 $n$ に強い下界が課される。step 2の群はrankが少なくとも3なので $n\geq12$ となり、12次元未満での仮想可換性が従う。

13次元には整数Heisenberg群を基本群にもつ正Ricci曲率の例があり、境界はほぼ鋭い。12次元で同様の例が存在するか、diameter growth仮定を外せるかはIntroductionで未解決問題として提示される。

## 背景と問題設定

nilpotent群 $G$ の降中心列を $G=\zeta_0(G)\triangleright\cdots\triangleright\zeta_s(G)=\{e\}$ とする。最小の $s$ がstepで、各商 $\zeta_j(G)/\zeta_{j+1}(G)$ のrankの和が $G$ のrankである。sublinear diameter growthは基本群の有限生成性を保証し、有限indexのtorsion-free nilpotent部分群へ移ることを可能にする。

## 主結果

### 次元障害と仮想可換性（Theorem A）

$M^n$ を $\operatorname{Ric}\geq0$ かつsublinear diameter growthをもつ完備非コンパクト多様体とする。$\pi_1(M)$ がrank $k$、step $s\geq2$ のtorsion-free nilpotent部分群を含むなら、

$$
n\geq4s(s-1)+k+1.
$$

特にtorsion-free nilpotent step-$s$ 群は $k\geq s+1$ なので、$s=2$ でも $n\geq12$ である。従って $n<12$ なら $\pi_1(M)$ は有限indexの可換部分群を含む。

### RCD空間の次元評価（Theorem B）

Introductionでは概略として次のように述べられている。次元 $k$ の連結単連結nilpotent Lie群 $H$ が $\operatorname{RCD}(0,N)$ 空間 $Y$ に等長作用し、商 $Y/H$ がrayで、ある $\mathbb R$-部分群の基点軌道のHausdorff次元が $s>1$ なら、同じ下界

$$
N\geq4s(s-1)+k+1
$$

を得る。これがTheorem Aへsynthetic geometry側から入力される。

## 証明の見取り図

普遍被覆のequivariant asymptotic coneにnilpotency stepを反映する大きなHausdorff次元の $\mathbb R$-軌道を見つける。次にRCD空間のregular setを $(0,\infty)\times H$ として捉え、低正則な重み付き計量 $g=dr^2+g_r$ と測度を復元する。distributional Bakry--Émery Ricci曲率と $g_r$ を表す行列の固有値評価を結び、軌道の次元から $N$ の下界を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2606.27724v1](https://arxiv.org/abs/2606.27724v1)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems A and B
- **論文構成の説明:** Introduction, pp. 4–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
