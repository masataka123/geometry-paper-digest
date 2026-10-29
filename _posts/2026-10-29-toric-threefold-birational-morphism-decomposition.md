---
layout: paper
title: Decompositions of birational toric morphism between threefolds
title_ja: トーリック3次元双有理射の滑らかな収縮とフロップへの分解
authors: Lingyao Xie
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $f:X\to Y$ be a birational morphism between smooth projective threefolds, Koll\'ar asked that if $f$ could be decomposed into smooth blow-downs and smooth flops. In this paper we show that the toric version is true.
topic: algebraic-geometry
tags:
- birational-geometry
- minimal-model-program
- toric-geometry
arxiv_id: 2610.36802v1
arxiv_url: https://arxiv.org/abs/2610.36802
arxiv_submitted: '2026-10-27'
arxiv_updated: '2026-10-27'
summary: 滑らかな3次元多様体の双有理射を、滑らかなブローダウンとフロップで分解できるかというKollárの問題を扱う。射影的なトーリック双有理射について肯定的に解決し、中間モデルから終点への射影性も確保する。
abstract_en: ''
summary_en: This work studies how a birational morphism of smooth threefolds can be broken into elementary geometric operations. In the toric setting, projectivity allows the author to use the minimal model program as a guide. The resulting decomposition uses smooth blow-downs and flops while retaining projective morphisms to the target. A counterexample discussed in the introduction explains why properness alone is insufficient.
abstract_ja: 滑らかな射影3次元多様体の双有理射を滑らかなブローダウンとフロップの合成として表せるかという問題に、トーリック幾何の範囲で肯定的な答えを与える。対象となる射の射影性を利用して極小モデル・プログラムを走らせ、その各段階を標準的な特異点解消上の滑らかな操作へ置き換える。
abstract_source_url: https://arxiv.org/abs/2610.36802
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.36802v1](https://arxiv.org/abs/2610.36802)
- **著者:** Lingyao Xie
- **初回投稿日:** 2026-10-27
- **最終更新日:** 2026-10-27
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな曲面間の双有理射は、$(-1)$曲線の収縮を繰り返して記述できる。3次元では滑らかなブローダウンだけでは足りず、Kollárはフロップを加えれば十分かと問うた。本論文はこの問題をトーリック3次元で解く。

得られる分解は、トーリックな$K$-フロップ、滑らかな点のブローダウン、滑らかな曲線のブローダウンからなる。もとの多様体が準射影的でも、対象の双有理射が射影的なら適用でき、中間モデルから終点への射も射影的に選べる。

鍵は、組合せ論だけで滑らかな分解を直接探すのでなく、相対的極小モデル・プログラムを案内役にすることである。Introductionは固有トーリック射に対する無条件の類似命題には反例があると述べ、射影性の役割を強調している。

## 背景と問題設定

3次元の通常の極小モデル・プログラムにはフリップや特異な因子収縮が現れ、中間モデルも滑らかとは限らない。したがってMMPが存在するだけでは、Kollárが求めた滑らかな操作による分解を得たことにならない。課題は、特異な中間段階を解消した上で、各射を許された操作へ置き換えることである。

## 主結果

### 滑らかなトーリック分解（Theorem 1.1）

滑らかな準射影トーリック3次元多様体間の射影的双有理トーリック射$f:X\to Y$は

$$
X=X\_0\dashrightarrow X\_1\dashrightarrow\cdots\dashrightarrow X\_N=Y
$$

と分解できる。各段階はトーリックな$K\_{X\_i}$-フロップ、滑らかな点のブローダウン、滑らかな曲線のブローダウンのいずれかである。さらに各$X\_i\to Y$を射影的な射として選べる。

この結論は、途中で特異な3次元モデルを許す分解より強い。一方、非トーリックな一般の3次元多様体についてのKollárの問題まで解決するものではない。Introductionでは相対Picard数2の場合の既知の結果にも触れている。

## 証明の見取り図

まず$Y$上のトーリック$K\_X$-MMPを走らせ、終点を$Y$に取る。そのファンは一般に正則ではないが、単体的かつ終端的であり、標準的な最小トーリック特異点解消を持つ。各MMP段階をこの解消へ持ち上げた双有理写像を、滑らかなブローダウンとフロップに分解するのが中心である。始点と終点はもとから滑らかなので、この持ち上げをつなぐことで求める分解となる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.36802)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.36802v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.36802v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
