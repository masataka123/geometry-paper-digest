---
layout: paper
title: Abundance for threefolds in positive characteristic
title_ja: 標数42超の三次元多様体に対するabundance
authors: Fabio Bernasconi, Jakub Witaszek, Zheng Xu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove the abundance conjecture for threefolds in characteristic $>42$.
topic: algebraic-geometry
tags:
- minimal-model-program
- positive-characteristic
- singularities
- positivity
arxiv_id: 2610.10439v1
arxiv_url: https://arxiv.org/abs/2610.10439v1
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: |-
  標数p>42の完全体上の射影的log canonical三次元対について、nefな対数標準因子の半豊富性を証明する。残る数値次元1の場合を、Calabi–Yau境界の形式近傍における直線束の自明化の延長へ帰着する。著者らはv1を予備的な稿と位置づけ、利用する指数評価を別の共著論文で公表する予定と述べる。
abstract_en: ''
summary_en: |-
  The remaining numerical-dimension-one case is a central obstacle to threefold abundance in positive characteristic. This preprint presents a proof for projective log canonical pairs over perfect fields of characteristic greater than 42. Its local criterion turns semiampleness into a problem of extending trivializations through infinitesimal neighborhoods of a boundary surface. The introduction identifies surface-index bounds from a forthcoming companion paper as an input and describes this version as preliminary.
abstract_ja: |-
  論文は、標数が42より大きい場合に三次元のabundance予想を証明すると述べる。Introductionの正確な対象は、完全体上の射影的log canonical三次元対であり、nefな対数標準因子が半豊富となるという結果である。
abstract_source_url: https://arxiv.org/abs/2610.10439v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.10439v1](https://arxiv.org/abs/2610.10439v1)
- **著者:** Fabio Bernasconi, Jakub Witaszek, Zheng Xu
- **初回投稿日:** 2026-10-07
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Abundance予想は、nefな対数標準因子が半豊富であることを求める。正標数の三次元では多くの場合が既に知られているが、数値次元1の場合が重要な残された問題となっていた。

著者らは、標数が42より大きい完全体上の射影的log canonical対についてabundanceを証明する。議論は、双有理的な帰着の後、境界の素因子の半豊富性を示す局所的な判定へ進む。

その判定では、境界上で自明な直線束を、十分厚い無限小近傍まで自明化できるかが鍵となる。形式被覆、表面のコホモロジー、Picardスキームを組み合わせて延長の障害を扱う。v1は著者ら自身が予備的な稿と説明しており、log Calabi–Yau表面の大域指数の評価を別の共著論文に依存する点も明示される。

## 背景と問題設定

標数0では三次元abundanceは既知である。Introductionによれば、正標数$p>3$でも$\nu(K_X+B)\ne1$の場合は解決されている。今回の新しい主張の範囲は$p>42$であり、$p>3$の全範囲を解決したと読み替えてはならない。

残る場合は双有理変形を通じて、$X$がQ-factorial、$(X,B)$がlc、$X\setminus B$がterminalであり、互いに交わらない素因子$S_i$を用いて

<div>
$$
B=\coprod_{i=1}^t S_i,\qquad
L:=K_X+B\sim_{\mathbb Q}\sum_{i=1}^t d_iS_i,
\qquad d_i>0,\qquad\nu(L)=1
$$
</div>

となる状況へ帰着する。$L$はnefであり、この帰着は飯高次元と数値次元を保つと説明される。

## 主結果

### 三次元abundance（Theorem 1.1）

完全体$k$の標数が$p>42$で、$(X,B)$が$k$上の射影的lc三次元対なら、

<div>
$$
K_X+B\text{ が nef}
\quad\Longrightarrow\quad
K_X+B\text{ が半豊富}
$$
</div>

である。これは単に数値的に非負であることから、十分可除な正の倍数が大域切断で生成されるという、写像を定める性質へ進む主張である。

### 局所半豊富性判定（Introductionで述べられるCorollary 6.6）

主定理の技術的な核は、正規射影三次元多様体$X$上の素な有効$\mathbb Q$-Cartier因子$S$の半豊富性である。上記の標数条件の下で、$S$の近傍$U$上で$X$がklt、$(X,S)$がlcであり、ある$a\in\mathbb Q_{>0}$と整数$m>0$について

<div>
$$
(K_X+S)|_U\sim_{\mathbb Q}aS|_U,
\qquad mS\text{ が }X\text{ 上 Cartier},
\qquad\mathcal O_X(mS)|_S\simeq\mathcal O_S
$$
</div>

が成り立てば、$S$は半豊富になる。境界そのものの上の自明性から、厚い近傍上の自明性へ進むことが核心である。

## 証明の見取り図

Totaroの判定を用いると、ある$l>0$に対して$E=lS$がCartierで、

<div>
$$
\mathcal O_X(E)|_E\simeq\mathcal O_E
$$
</div>

となることを示せばよい。ここで$E$は厚みを持つ閉部分スキームとしても現れるため、$S$上での自明性だけでは足りない。

著者らは$S$に沿う形式完備化上で標数と互いに素な次数の巡回被覆を取り、双対化層が自明なGorenstein slc境界を得る。逐次的な厚みの商の$H^1$が消えれば自明化を延長できるが、残る不正則な場合にはPicardスキームと障害類をさらに調べる。Introductionでは、半アーベルな滑らかなPicardスキームや二次元の$H^1$を持つ場合へ整理する流れが説明される。

必要なlog Calabi–Yau表面の大域指数の評価は、Introduction時点では近く独立に公表する予定の共著論文に置かれている。本記事はその未掲載の証明や後続節の議論を検証したとは主張しない。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.10439v1](https://arxiv.org/abs/2610.10439v1)
- **Introduction:** Section 1、pp. 1–3のPreliminaries直前。
- **主結果:** Theorem 1.1、Introductionで説明されるCorollary 6.6、式(1.1)–(1.3)。
- **論文構成:** Section 3で境界表面、Sections 4–6で局所判定、Section 7でabundanceを扱い、付録で表面と厚み上のコホモロジーを補う。
- **確認バージョン:** v1（著者らが予備的な稿と明記）。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
