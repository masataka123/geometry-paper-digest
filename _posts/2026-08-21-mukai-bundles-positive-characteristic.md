---
layout: paper
title: "Mukai bundles and Brill-Noether generality for prime Fano threefolds in positive characteristic"
title_ja: "正標数の素Fano三次元多様体上のMukai束とBrill--Noether一般性"
authors: "Hiromu Tanaka"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  Let $X$ be a prime Fano threefold of genus $g\geq 8$ in positive characteristic. For every nontrivial decomposition $g =rs$, we prove that there exists a unique Mukai bundle on $X$ of type $(r, s)$. To this end, we show that every smooth hyperplane section of $X$ is Brill-Noether general.
topic: algebraic-geometry
tags:
  - fano-varieties
  - positive-characteristic
  - vector-bundles-sheaves
  - stability
arxiv_id: "2608.21260v1"
arxiv_url: "https://arxiv.org/abs/2608.21260"
arxiv_submitted: "2026-08-21"
arxiv_updated: "2026-08-21"
summary: >-
  正標数上の種数 $g\geq8$ の素Fano三次元多様体に、分解 $g=rs$ ごとに型 $(r,s)$ のMukai束が一意に存在することを示す。滑らかな反標準K3曲面とその完全交叉曲線のBrill--Noether一般性を確立し、正標数版Mukaiモデルの基礎を与える。
abstract_en: ""
summary_en: >-
  This work constructs the vector bundles needed for Mukai's description of prime Fano threefolds over fields of positive characteristic. Each nontrivial factorization of the genus determines one stable bundle, uniquely up to isomorphism, with prescribed determinant, cohomology, and global generation. A key ingredient is a Brill–Noether generality theorem for smooth anticanonical sections and their curve intersections. Mixed-characteristic lifting and a relative minimal-model argument overcome specialization difficulties.
abstract_ja: >-
  正標数上の種数 $g\geq8$ の素Fano三次元多様体 $X$ に対し、任意の非自明な分解 $g=rs$ ごとに型 $(r,s)$ のMukai束が一意に存在する。そのために、$X$ の全ての滑らかな超平面切断がBrill--Noether一般であることを証明する。
abstract_source_url: "https://arxiv.org/abs/2608.21260"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.21260v1](https://arxiv.org/abs/2608.21260)
- **著者:** Hiromu Tanaka
- **初回投稿日・最終更新日:** 2026-08-21
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

素Fano三次元多様体のMukaiによる射影モデルでは、適切な安定ベクトル束がGrassmann多様体への写像を生む。標数0で知られていたこの構成を正標数へ移すことが本論文の目的である。

種数 $g=rs$ の非自明な分解ごとに、階数 $r$、第一Chern類 $K_X$ をもつ安定束 $U_X$ を構成する。その双対は大域生成され、切断数は $r+s$ であり、高次コホモロジーが消える。

存在証明の核は、滑らかな反標準K3曲面と二つの反標準因子の滑らかな交曲線がBrill--Noether一般であるという定理である。混標数への持ち上げとMMPを用いた部分同時解消により、正標数への特殊化で因子がCartierでなくなる問題を処理する。

## 背景と問題設定

$X$ を素Fano三次元多様体とし、$(-K_X)^3=2g-2$ とする。Mukai束は $X$ をGrassmann多様体へ写し、その像を斉次多様体の線形切断として認識するための中心的道具である。正標数では、標数0の特殊Mukai因子をK3曲面へ特殊化する際のfactorial性が障害となる。

## 主結果

### Mukai束の存在と一意性（Theorem 1.2）

$k$ を標数 $p>0$ の代数閉体、$X$ を種数 $g\geq8$ の素Fano三次元多様体とし、$g=rs$、$r,s\geq2$ とする。このとき $\mu_{-K_X}$-安定なベクトル束 $U_X$ が同型を除いて一意に存在し、

$$
\operatorname{rank}U_X=r,\qquad c_1(U_X)=K_X,
$$

$$
H^j(X,U_X)=0\quad(j\geq0),
$$

かつ $U_X^\vee$ は大域生成され、$h^0(X,U_X^\vee)=r+s$、$H^i(X,U_X^\vee)=0$（$i>0$）を満たす。

### Brill--Noether一般性（Theorem 1.3）

$|-K_X|$ がvery ampleなら、任意の滑らかな $S\in|-K_X|$ と $H=-K_X|_S$ はBrill--Noether一般である。また滑らかな $S_1,S_2$ の交わり $C=S_1\cap S_2$ が滑らかなら、$C$ もBrill--Noether一般である。

## 証明の見取り図

混標数族の一般ファイバー上に特殊Mukai因子を取り、その閉包を正標数ファイバーへ特殊化する。全空間がfactorialなら直ちにCartier因子が得られるが、一般には解消と相対MMPから各ファイバー上で同型または最小解消となる $\mathbb Q$-factorial terminalモデルを作る。Brill--Noether一般性と半連続性が切断数を固定し、elementary transformから $U_X$ を構成する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.21260](https://arxiv.org/abs/2608.21260)
- **Introduction:** Section 1, pp. 2–5
- **主要定理:** Theorems 1.2, 1.3
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
