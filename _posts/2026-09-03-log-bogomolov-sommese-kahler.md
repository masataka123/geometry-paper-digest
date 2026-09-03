---
layout: paper
title: "A logarithmic Bogomolov--Sommese vanishing theorem on compact Kähler manifolds"
title_ja: "コンパクトKähler多様体上の対数的Bogomolov--Sommese消滅定理"
authors: "Zhi Li, Xiankui Meng, Kai Pang, Chenghao Qing, Xiangyu Zhou"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  In this paper, we establish a logarithmic Bogomolov--Sommese vanishing theorem in terms of numerical dimension for pseudo-effective line bundles on compact Kähler manifolds. As an application, we obtain a rigidity result with vanishing second Chern class for logarithmic cotangent bundles by combining the vanishing theorem with a structure theorem of Iwai and Matsumura.
topic: algebraic-geometry
tags:
  - positivity
  - multiplier-ideals-extension
  - chern-classes
arxiv_id: "2609.01965v1"
arxiv_url: "https://arxiv.org/abs/2609.01965"
arxiv_submitted: "2026-09-02"
arxiv_updated: "2026-09-02"
summary: >-
  コンパクトKähler多様体上の擬有効線束について、数値的次元で消滅範囲を測る対数的Bogomolov--Sommese定理を確立する。単純正規交差因子を許すこの結果から、対数余接束の第二Chern類消滅をnef性と対数標準束の低い数値的次元で特徴づける。
abstract_en: ""
summary_en: >-
  The paper proves a logarithmic vanishing theorem for differential forms twisted by the inverse of a pseudo-effective line bundle on a compact Kähler manifold. The vanishing range is controlled by the numerical dimension, extending both the classical logarithmic result in the projective setting and Boucksom's Kähler result without boundary. Dual and multiplier-ideal formulations are also obtained. The theorem is then combined with earlier structure results to characterize when the second Chern class of a logarithmic cotangent bundle vanishes.
abstract_ja: >-
  コンパクトKähler多様体上の擬有効線束に対し、数値的次元を用いた対数微分形式のBogomolov--Sommese型消滅定理を示す。さらにIwai--Matsumuraの構造定理と組み合わせ、対数余接束の第二Chern類が消える場合の剛性を導く。
abstract_source_url: "https://arxiv.org/abs/2609.01965"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.01965](https://arxiv.org/abs/2609.01965)
- **著者:** Zhi Li, Xiankui Meng, Kai Pang, Chenghao Qing, Xiangyu Zhou
- **初回投稿日:** 2026年9月2日
- **最終更新日:** 2026年9月2日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

古典的なBogomolov--Sommese消滅定理は、射影多様体上の対数微分形式に含まれる階数1部分層のKodaira--Iitaka次元を制限する。一方、Boucksomの定理は境界因子を持たないコンパクトKähler多様体へ舞台を広げ、擬有効線束の数値的次元によって消滅範囲を与える。

本論文は両方向を統合し、コンパクトKähler多様体上で単純正規交差因子を許す対数的消滅定理を証明する。Kodaira--Iitaka次元ではなく数値的次元を用いるため、射影的場合にも古典定理以上の消滅範囲を与え得る。

Serre双対による最高次コホモロジーの消滅と、Siu分解を介した乗数イデアル層付きの系も得られる。さらにこの消滅定理を既知の構造定理と結び、対数余接束の第二Chern類消滅に対する剛性を示す。

## 背景と問題設定

$X$ をコンパクトKähler多様体、$D$ を被約単純正規交差因子、$L$ を擬有効線束とする。古典定理では $p<\kappa(L)$ のとき対数 $p$ 形式が消えるが、境界のないKähler版では数値的次元 $\operatorname{nd}(L)$ が現れる。自然な問題は、後者を対数形式へ拡張できるかである。

## 主結果

### 対数的消滅定理（Theorem 1.3）

上の仮定のもとで、$p<\operatorname{nd}(L)$ ならば

$$
H^0\bigl(X,\Omega_X^p(\log D)\otimes L^{-1}\bigr)=0
$$

が成り立つ。$D=0$ ではBoucksomの定理を回収し、射影的場合には $\kappa(L)\leq\operatorname{nd}(L)$ により古典的な対数的消滅を含む。

### 第二Chern類による剛性（Theorem 1.6）

$K_X+D$ がnefであるとき、次の二条件は同値である。

$$
c_2\bigl(\Omega_X^1(\log D)\bigr)=0\quad\text{in }H^{2,2}(X,\mathbb R),
$$

$$
\Omega_X^1(\log D)\text{ is nef},\qquad \operatorname{nd}(K_X+D)\leq1.
$$

消滅定理が、対数余接束の正値性とChern類の位相的条件を結ぶ点が応用上の核心である。

## 証明の見取り図

Introductionによれば、主消滅定理には擬有効類を表す特異Hermite計量と解析的消滅法を用いる。Siu分解を組み合わせることで乗数イデアル層付きの形を導き、射影的場合には超平面帰納による別証明も与える。最後にCao--PăunおよびIwai--Matsumuraの結果と主定理を組み合わせ、第二Chern類消滅の同値条件へ到達する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.01965](https://arxiv.org/abs/2609.01965)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorems 1.3, 1.6; Corollaries 1.4, 1.5
- **論文構成の説明:** Introduction, p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
