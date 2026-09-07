---
layout: paper
title: "On the $4$-dimensional minimal model program for Kähler varieties"
title_ja: "Kähler多様体に対する4次元極小モデル・プログラム"
authors: "Omprokash Das, Christopher Hacon, Mihai Păun"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  In this article we establish the following results: Let $(X, B)$ be a dlt pair, where $X$ is a $\mathbb Q$-factorial Kähler $4$-fold -- (i) if $X$ is compact and $K_X+B\sim_{\mathbb Q} D\geq 0$ for some effective $\mathbb Q$-divisor, then $(X, B)$ has a log minimal model, (ii) if $(X/T, B)$ is a semi-stable klt pair, $W\subset T$ a compact subset and $K_X+B$ is effective over $W$ (resp. not effective over $W$), then we can run a $(K_X+B)$-MMP over $T$ (in a neighborhood of $W$) which ends with a minimal model over $T$ (resp. a Mori fiber space over $T$). We also give a proof of the existence of flips for analytic varieties in all dimensions and the relative MMP for projective morphisms between analytic varieties.
topic: algebraic-geometry
tags:
  - minimal-model-program
  - birational-geometry
  - singularities
arxiv_id: "2205.12205v3"
arxiv_url: "https://arxiv.org/abs/2205.12205"
arxiv_submitted: "2022-05-24"
arxiv_updated: "2024-04-09"
summary: >-
  $\mathbb Q$-factorialなコンパクトKähler 4-foldのeffective dlt pairがlog minimal modelをもつことを示し、半安定klt族では相対MMPがminimal modelまたはMori fiber spaceで停止する条件を与える。三次元Kähler MMPを境界因子へ適用し、解析空間の射影的射に対するflipと相対MMPを組み込むことで、高次元Kähler MMPへの第一歩を築く。
abstract_en: ""
summary_en: >-
  The paper establishes major cases of the minimal model program for Kähler fourfolds. An effective Q-factorial compact dlt pair is shown to possess a log minimal model, while a semistable klt family admits a relative program ending in either a minimal model or a Mori fiber space according to effectivity. The authors reduce key contraction questions to the established three-dimensional Kähler theory along boundary components. They also prove finite generation and relative MMP statements for projective morphisms of analytic varieties.
abstract_ja: >-
  $\mathbb Q$-factorialなKähler 4-fold上のdlt pairについて、コンパクトかつ$K_X+B$が有効$\mathbb Q$因子と$\mathbb Q$線形同値ならlog minimal modelが存在する。半安定klt pairの相対設定では、標準因子が有効ならminimal model、有効でなければMori fiber spaceに至るMMPを実行できる。加えて任意次元の解析多様体に対するflipの存在と、解析多様体間の射影的射に対する相対MMPを与える。
abstract_source_url: "https://arxiv.org/abs/2205.12205"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2205.12205](https://arxiv.org/abs/2205.12205)
- **著者:** Omprokash Das, Christopher Hacon, Mihai Păun
- **初回投稿日:** 2022年5月24日
- **最終更新日:** 2024年4月9日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影多様体の極小モデル・プログラムは任意次元で大きく発展した一方、Kähler多様体では三次元を越える一般論が十分でない。本論文はKähler 4-foldのeffective dlt pairと、三次元族として現れる半安定klt pairを扱う。

コンパクトな$\mathbb Q$-factorial Kähler 4-foldで$K_X+B$が有効因子と$\mathbb Q$線形同値なら、MMPはlog minimal modelに到達する。半安定な相対設定では、底のコンパクト部分の近傍でeffectivityに応じてminimal modelまたはMori fiber spaceへ到達する。

鍵は負の端射線を境界の三次元成分へ制限し、既知の三次元Kähler MMPで得る収縮を四次元へ延長することである。flipの存在には解析空間間の射影的射に対する相対MMPを使い、停止性にはspecial termination、log canonical thresholdのACC、三次元の停止性を組み合わせる。

## 背景と問題設定

射影的でないKähler設定では、$\mathbb Q$-Cartier因子のnef性をすべての曲線との交点だけで判定する射影的な議論がそのまま使えない。Introductionは、bigな$(1,1)$類の制限のpseudo-effectivityを使うnef判定を準備し、解析的文脈で収縮とflipを構成する必要を強調する。

## 主結果

### effective dlt pairの極小モデル（Theorem 1.1）

$(X,B)$を$\mathbb Q$-factorialなコンパクトKähler 4-fold dlt pairとし、

$$
K_X+B\sim_{\mathbb Q}M\geq0
$$

と仮定する。このとき$(X,B)$はlog minimal modelをもつ。effectivityを利用して負の端射線が有効因子$M$のある成分と負に交わるようにし、問題をその三次元成分へ移す。

### 半安定族の相対MMP（Theorem 1.2）

$f:(X,B)\to T$を四次元の$\mathbb Q$-factorial semi-stable klt pair、$W\subset T$をコンパクト集合とする。$K_X+B$が$W$上で有効なら、$W$の近傍で相対MMPを走らせminimal modelで終えられる。有効でなければMori fiber spaceで終えられる。

### 解析的相対有限生成とMMP（Theorems 1.3, 1.4）

Fujiki class $\mathcal C$に属する$X$から解析多様体$Y$へのproper surjective morphismとklt pairに対し、相対標準代数

$$
R(X/Y,K_X+B)=\bigoplus_{m\geq0}f_*\mathcal O_X(m(K_X+B))
$$

が局所有限生成である。さらに所定の局所条件下の射影的射について相対MMPを実行でき、bigな場合のminimal modelと非pseudo-effectiveな場合のMori fiber spaceへの停止を得る。

## 証明の見取り図

Theorem 1.1では$K_X+B\sim_{\mathbb Q}M\geq0$を使い、$K_X+B+\lambda M$に対するMMPとして走らせる。負の端射線を張る曲線$C$について$M\cdot C<0$となる成分$S$を選び、adjunctionで得る三次元dlt pair $(S,B_S)$に既知のMMPを適用する。その収縮を$X$へ延長し、divisorial contractionまたはflipを反復する。停止性はspecial termination、ACC、三次元flipの停止性から従う。半安定族では各fiber上の三次元klt pairへ還元する。

## 原論文との対応

- **Abstractページ:** [arXiv:2205.12205](https://arxiv.org/abs/2205.12205)
- **Introduction:** Section 1, pp. 2–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.4
- **論文構成の説明:** Introduction, p. 4
- **確認したarXivバージョン:** v3
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
