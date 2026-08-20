---
layout: paper
title: "On the global and local geometry of quasi-$F$-split varieties with trivial canonical bundle"
title_ja: "標準束が自明なquasi-$F$-split多様体の大域・局所幾何"
authors: "Jefferson Baudin"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We solve certain questions related to the geometry and singularities of quasi-$F$-split varieties with trivial canonical bundle. First, we prove that regular quasi-$F^{\infty}$-split varieties are not geometrically uniruled (this generalizes and significantly simplifies the earlier results of Patakfalvi and Zdanowicz) and have geometrically canonical singularities. Second, we show that there exist quasi-$F$-split surfaces with trivial canonical bundle which are not quasi-$F^{\infty}$-split, answering negatively a question raised by Kawakami, Takamatsu, Tanaka, Witaszek, Yobuko and Yoshikawa. Third, we show that normal quasi-$F$-split varieties with trivial canonical bundle are geometrically normal (this extends a result of Kawakami, Takamatsu and Yoshikawa), and finally we prove that quasi-$F^e$-pure normal varieties $X$ such that $mp^eK_X$ is Cartier for $m$ coprime to $p$ are log canonical, under a resolution of singularities hypothesis.
topic: algebraic-geometry
tags:
  - positive-characteristic
  - singularities
arxiv_id: "2607.20272v1"
arxiv_url: "https://arxiv.org/abs/2607.20272"
arxiv_submitted: "2026-07-22"
arxiv_updated: "2026-07-22"
summary: >-
  正標数の標準類数値的自明な多様体について、quasi-$F$-splittingが幾何的非単線織性・正規性やMMP特異点をどこまで制御するかを明らかにする。quasi-$F$-splitとquasi-$F^\infty$-splitの差を示す反例も構成し、局所的には解消の存在を仮定してlog canonical性を導く。
abstract_en: ""
summary_en: >-
  The paper studies global geometry and local singularities of quasi-$F$-split objects in positive characteristic, especially when the canonical class is trivial. It proves non-uniruledness and geometric singularity statements under an iterated splitting condition, while exhibiting a surface that separates ordinary and iterated quasi-$F$-splitting. It also establishes geometric normality and a log-canonical criterion subject to an appropriate resolution hypothesis.
abstract_ja: >-
  標準束が自明なquasi-$F$-split多様体の幾何と特異点に関する複数の問題を解く。正則quasi-$F^\infty$-split多様体の幾何的非単線織性と幾何的canonical性、正規quasi-$F$-split多様体の幾何的正規性を示す一方、quasi-$F$-splitだがquasi-$F^\infty$-splitでない曲面を与える。さらに解消の仮定の下で、一定の指数条件を満たすquasi-$F^e$-pure正規多様体がlog canonicalであることを示す。
abstract_source_url: "https://arxiv.org/abs/2607.20272"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2607.20272](https://arxiv.org/abs/2607.20272)
- **著者:** Jefferson Baudin
- **初回投稿日・最終更新日:** 2026年7月22日（v1）
- **主分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

正標数では、標準類が自明でもK3曲面が単線織になり得るなど、標数零とは異なる現象が起こる。$F$-split性はそれを抑えるが、本論文はより広いquasi-$F$-split性で何が残るかを問う。

反復版quasi-$F^\infty$-splitの下では非単線織性と良い幾何的特異点が得られる。一方、標数2では通常版と反復版が一致しない曲面があり、両条件の差は実質的である。

さらに標準類が数値的自明な正規proper多様体の幾何的正規性を示し、局所環については標準因子の指数とlog resolutionの仮定からlog canonical性を導く。

## 背景と問題設定

quasi-$F$-splittingはWittベクトルを用いてFrobenius splittingを拡張する概念である。有限Artin–Mazur heightのCalabi–Yau多様体の標数零への持ち上げ可能性を調べるために導入され、通常の$F$-splitより広いクラスを捉える。

## 主結果

### 非単線織性と幾何的canonical性（Theorem A）

標数 $p>0$ の体上で、$X$ を正則proper、$K_X\equiv0$、$H^0(X,\mathcal O_X)=K$ とする。$X$ がquasi-$F^\infty$-splitなら、$X$ は幾何的に単線織でなく、幾何的canonical特異点をもつ。

### 曲面における反復条件の限界（Theorem B）

代数閉体上の滑らかな射影quasi-$F$-split曲面 $S$ で $\omega_S\simeq\mathcal O_S$ とする。$p\ne2$ なら $S$ はquasi-$F^\infty$-splitであるが、$p=2$ ではquasi-$F^2$-splitでない例が存在する。その結果、Cartier標準因子をもつlog canonical三次元特異点で、quasi-$F$-pureだがquasi-$F^\infty$-pureでないものが得られる。

### 幾何的正規性（Theorem C）

$X$ が正規proper、$K_X\equiv0$、$H^0(X,\mathcal O_X)=K$ でquasi-$F$-splitなら、$X$ は幾何的正規である。

### 局所的log canonical性（Theorem D）

正規quasi-$F^e$-pure局所環 $R$ について、$p$ と互いに素な $m$ が存在して $mp^eK_R$ がCartierであり、prime-to-$p$ index coverがlog resolutionをもつなら、$R$ はlog canonicalである。

## 証明の見取り図

Introductionは、Witt canonical sheaf上のFrobenius traceを通じてquasi-$F$-splittingを標準形式の非消滅へ移し、生成有限・支配的写像に沿ってその非消滅を比較する方針を示す。非単線織性は、単線織モデルなら標準形式が消えることとの矛盾から導かれる。曲面の反例には標数2のEnriques型の現象が用いられ、局所定理ではindex coverを経て既知のquasi-$F^\infty$-pureとlog canonical性の対応へ還元する。

## 原論文との対応
- **Abstractページ:** [arXiv:2607.20272](https://arxiv.org/abs/2607.20272)
- **Introduction:** Section 1, pp. 1–2
- **主要結果:** Theorems A–D
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
