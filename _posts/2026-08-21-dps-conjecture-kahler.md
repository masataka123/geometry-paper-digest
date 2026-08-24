---
layout: paper
title: "On a conjecture of Demailly-Peternell-Schneider: the Kahler case"
title_ja: "Demailly--Peternell--Schneider予想のKählerの場合"
authors: "Xin Fu, Juanyong Wang"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  Let $f:(X,Δ)\rightarrow Y$ be a surjective holomorphic map between two normal Kahler varieties, where (X,Δ) is a log canonical pair, -(KX+Δ) is nef and Y is Q-Gorenstein. In Fu-Guo-Song-Wang [18], it is proved that -KY is pseudo-effective if f is a projective morphism. In this paper, prove that -KY is pseudo-effective without assuming that f is projective
topic: algebraic-geometry
tags:
  - positivity
  - singularities
  - foliations
arxiv_id: "2608.20679v1"
arxiv_url: "https://arxiv.org/abs/2608.20679"
arxiv_submitted: "2026-08-21"
arxiv_updated: "2026-08-21"
summary: >-
  反対数標準類がnefなlog canonical Kähler対から正規Kähler空間への全射に対し、底空間の反標準類がpseudo-effectiveになることを証明する。射がprojectiveという従来の仮定を除き、Demailly--Peternell--Schneider予想を特異なコンパクトKähler設定で確立する。
abstract_en: ""
summary_en: >-
  The paper studies how anticanonical positivity descends through a surjective holomorphic map of compact Kähler spaces. For a log canonical source pair with nef negative log-canonical class and a Q-Gorenstein target, the target's anticanonical class is shown to be pseudo-effective. Unlike earlier results, the map itself need not be projective. The proof separates rationally connected directions by a relative MRC quotient and then descends a positive current to the base.
abstract_ja: >-
  正規コンパクトKähler空間の間の全射 $f:(X,\Delta)\to Y$ を考える。$(X,\Delta)$ がlog canonical、$-(K_X+\Delta)$ がnef、$Y$ が $\mathbb Q$-Gorensteinなら、射の射影性を仮定せずに $-K_Y$ がpseudo-effectiveであることを示す。
abstract_source_url: "https://arxiv.org/abs/2608.20679"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.20679v1](https://arxiv.org/abs/2608.20679)
- **著者:** Xin Fu, Juanyong Wang
- **初回投稿日・最終更新日:** 2026-08-21
- **主分類・副分類:** math.AG; math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

反標準束がnefな射影またはKähler多様体はFano、Calabi--Yau、Abel多様体を含み、その全射の底へ反標準類の正値性がどう伝わるかは構造論の中心問題である。Demailly--Peternell--Schneider予想は、$-K_X$ がnefなら $-K_Y$ がpseudo-effectiveになると主張する。

従来、特異対を許す結果は底または射にprojectivityを要求していた。本論文は総空間と底が正規コンパクトKähler空間である設定で、その制約を除く。

主要仮定は $(X,\Delta)$ のlog canonicity、$-(K_X+\Delta)$ のnef性、および $Y$ の $\mathbb Q$-Gorenstein性である。結論は $-K_Y$ を表す閉正カレントの存在、すなわちpseudo-effectivityである。

## 背景と問題設定

射影射の場合は弱正値性やBergman計量の変動を使えるが、一般のKähler射ではそのまま適用できない。そこで一般ファイバーの最大有理連結商（MRC quotient）を解消し、有理連結方向と非有理連結方向を分離する。

## 主結果

### 反標準類のpseudo-effectivity（Theorem 1.1）

$f:(X,\Delta)\to Y$ を全射正則写像とし、$X,Y$ は正規コンパクトKähler空間、$Y$ は $\mathbb Q$-Gorensteinとする。さらに $\Delta\geq0$、$(X,\Delta)$ はlog canonical、$K_X+\Delta$ は $\mathbb R$-Cartierで、

$$
-(K_X+\Delta)\ \text{はnef}
$$

と仮定する。このとき

$$
-K_Y\ \text{はpseudo-effective}
$$

である。

## 証明の見取り図

log resolution上で一般ファイバーのMRC quotientを相対的に解消する。MRCの底の非常に一般のファイバーはKodaira次元0であり、相対Bergman構成から相対標準類のpseudo-effectivityを得る。有理連結部分について既知の射影的結果を適用すると、$-p^*K_Y$ に例外因子を加えた類がpseudo-effectiveとなる。最後にファイバー積分とカレントのsupport theoremを用い、例外因子のpushforwardが消えることを示して $Y$ へ正カレントを降ろす。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.20679](https://arxiv.org/abs/2608.20679)
- **Introduction:** Section 1, pp. 1–2
- **主要定理:** Theorem 1.1
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
