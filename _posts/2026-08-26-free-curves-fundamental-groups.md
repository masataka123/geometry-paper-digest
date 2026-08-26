---
layout: paper
title: "Free curves and fundamental groups"
title_ja: "自由曲線と基本群"
authors: "Eric Jovinelly, Brian Lehmann, Eric Riedl"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We show that klt Fano varieties and certain lc Fano varieties contain free higher-genus curves in their smooth loci. Our methods also allow us to find free curves on varieties in positive characteristic and on quasiprojective varieties, under a natural positivity condition on the tangent bundle. We then use the existence of free curves to deduce finiteness of the fundamental group of the smooth locus in these settings. The paper includes an appendix by de Jong that establishes the Künneth formula for tame étale fundamental groups.
topic: algebraic-geometry
tags:
  - fano-varieties
  - positivity
  - positive-characteristic
  - fundamental-groups
arxiv_id: "2510.27031v2"
arxiv_url: "https://arxiv.org/abs/2510.27031"
arxiv_submitted: "2025-10-30"
arxiv_updated: "2026-01-08"
summary: >-
  特異Fano多様体の滑らかな部分に、種数を許した強い自由性をもつ曲線を構成する。dlt Fano対、接束が正な正標数多様体、対数的設定を統一的に扱い、1-free曲線の存在から滑らかな部分の位相的またはétale基本群の有限性を導く。
abstract_en: ""
summary_en: >-
  The authors replace the search for rational curves on the smooth part of a singular Fano variety by a more flexible search for highly free curves of arbitrary genus. They establish existence results for dlt Fano pairs in characteristic zero and under tangent-bundle positivity in arbitrary characteristic, while also treating logarithmic curves on open varieties. A curve satisfying the resulting one-freeness condition forces finiteness statements for topological, étale, or tame fundamental groups of the relevant smooth locus. An appendix supplies the product theorem for tame étale fundamental groups used in the logarithmic case.
abstract_ja: >-
  klt Fano多様体および一定のlc Fano多様体の滑らかな部分に自由な高種数曲線が存在することを示す。接束に自然な正値性を課すことで、正標数多様体と準射影多様体にも自由曲線を構成する。さらに自由曲線の存在を用い、これらの設定で滑らかな部分の基本群が有限であることを導く。de Jongによる付録はtame étale基本群のKünneth公式を確立する。
abstract_source_url: "https://arxiv.org/abs/2510.27031"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2510.27031](https://arxiv.org/abs/2510.27031)
- **著者:** Eric Jovinelly, Brian Lehmann, Eric Riedl（付録: Aise Johan de Jong）
- **初回投稿日:** 2025年10月30日
- **最終更新日:** 2026年1月8日（v2）
- **主分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかなFano多様体では自由有理曲線が幾何を調べる基本的道具となる。しかし特異Fano多様体上の有理曲線は特異点を通り得るため、滑らかな部分に自由有理曲線が存在するかは高次元で難しい問題である。

論文は曲線の種数を固定しないことでこの障害を回避する。引き戻した接束の全ての正階数商の傾きに下限を課す $r$-free曲線を導入し、dlt Fano対では任意の $r$ に対する曲線を一つの滑らかな曲線から構成できると示す。

この枠組みは正標数と対数的準射影設定にも及ぶ。さらに1-free曲線が存在すれば滑らかな部分の基本群が有限になるため、曲線の変形可能性を位相的・étale的有限性へ変換する。

## 背景と問題設定

滑らかな曲線 $C$ から多様体 $X$ の滑らかな部分への射 $s:C\to X_{\mathrm{sm}}$ は、$s^*T_X$ の任意の正階数商の傾きが $2g(C)+r$ 以上なら $r$-freeと呼ばれる。$r=1$ は基本群への応用に十分な変形的正値性を表す。

## 主結果

### dlt Fano対上の高種数自由曲線（Theorem 1.3）

標数0の代数閉体上のdlt Fano対 $(X,\Delta)$ に対し、滑らかな固有曲線 $C$ が存在し、任意の $r\ge0$ について $r$-free射 $C\to X_{\mathrm{sm}}$ が存在する。

### terminal Fano三次元多様体（Theorem 1.4）

標数0のterminal Fano三次元多様体には、滑らかな部分に含まれる自由有理曲線 $\mathbb P^1\to X_{\mathrm{sm}}$ が存在する。高種数結果と別の先行結果を合わせ、元の有理曲線問題へ戻る帰結である。

### 正値性による判定と基本群（Theorems 1.5--1.8）

$\mathbb Q$-factorial lc Fano対では、1-free曲線の存在、$T_X$ に数値的に自明な第1 Chern類をもつ正階数商がないこと、全ての $m>0$ で

$$
H^0(X_{\mathrm{sm}},\Omega_{X_{\mathrm{sm}}}^{\otimes m})=0
$$

となることが同値である。また1-free曲線をもつ複素射影多様体では $\pi_1(X_{\mathrm{sm}})$ が有限であり、任意標数ではétale基本群が有限となる。接束の最小傾きがample因子 $H$ に関して $\mu_{H^{n-1}}^{\min}(T_X)>0$ なら、任意の自由度の曲線も存在する。

### 対数的設定（Theorems 1.9, 1.11）

lc Fano対の対数接束について同様の三条件を与え、1-free対数曲線の存在を特徴づける。その存在は境界の係数1部分を除いた滑らかな開集合のcurve-tame étale基本群、複素数体上では位相的基本群の有限性を導く。

## 証明の見取り図

Introductionでは、接束または対数接束の商の傾きを制御することを中心原理としている。Harder--Narasimhan理論とMMPを通じて正な曲線類を構成し、その類を滑らかな部分に動く曲線で実現して高い自由性を得る。基本群については1-free曲線の変形族が与える支配性を用い、対数的場合には付録のtame étale基本群のKünneth公式を組み込む。

## 原論文との対応

- **Abstractページ:** [arXiv:2510.27031](https://arxiv.org/abs/2510.27031)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中の主要結果:** Conjecture 1.1, Definition 1.2, Theorems 1.3--1.9, 1.11
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
