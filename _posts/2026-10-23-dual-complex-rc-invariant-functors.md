---
layout: paper
title: The dual complex and RC-invariant functors
title_ja: 一般化双対複体と有理連結性に不変な関手
authors: Andrew Burke
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We extend the dual complex of a simple normal crossings divisor to a homotopy type invariant $\mathcal{D}(X)$ of arbitrary complex varieties, and we prove that it is contractible when $X$ is connected and of klt type. In fact, the dual complex belongs to a broader class of invariants, which we call RC (rationally connected)-invariant functors. We prove a rigidity theorem governing the behavior of such functors with respect to rationally connected fibrations.
topic: algebraic-geometry
tags:
- singularities
- birational-geometry
- hodge-theory
- fundamental-groups
- algebraic-cycles-enumerative
arxiv_id: 2610.30608v1
arxiv_url: https://arxiv.org/abs/2610.30608
arxiv_submitted: '2026-10-22'
arxiv_updated: '2026-10-22'
summary: 単純正規交叉因子の双対複体を任意の複素多様体へ拡張し、klt型の連結な空間では可縮になることを示す。有理連結な一般ファイバーを持つ射影射に対する剛性を、RC不変関手の共通原理として定式化する。特異ファイバーの有理鎖連結性、基本群、零サイクル、重み0のコホモロジーを統一的に扱う。
abstract_en: We extend the dual complex of a simple normal crossings divisor to a homotopy type invariant $\mathcal{D}(X)$ of arbitrary complex varieties, and we prove that it is contractible when $X$ is connected and of klt type. In fact, the dual complex belongs to a broader class of invariants, which we call RC (rationally connected)-invariant functors. We prove a rigidity theorem governing the behavior of such functors with respect to rationally connected fibrations.
summary_en: ''
abstract_ja: 単純正規交叉因子の双対複体を、任意の複素多様体Xのホモトピー型不変量D(X)へ拡張し、Xが連結でklt型ならD(X)が可縮であることを証明する。双対複体はRC、すなわち有理連結性に不変な関手という広いクラスに属し、それらの関手が有理連結なファイブレーションに対して示す剛性を確立する。
abstract_source_url: https://arxiv.org/abs/2610.30608
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.30608v1](https://arxiv.org/abs/2610.30608)
- **著者:** Andrew Burke
- **初回投稿日:** 2026-10-22
- **最終更新日:** 2026-10-22
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

単純正規交叉因子の双対複体は、成分とその交わり方をセル複体として表す。本論文はこの構成を任意の複素代数多様体へ広げ、特異点を持つ空間にもホモトピー型$D(X)$を対応させる。

中心となる結果は、有理連結な一般ファイバーを持つ射影射が、この不変量を保つという剛性である。しかも底全体だけでなく、任意の閉部分多様体とその逆像を比較できる。連結なklt型多様体の一般化双対複体が可縮であることは、その一つの帰結となる。

同じ議論は双対複体に限らず、有理連結方向を区別しない関手へ適用できる。これにより、特異ファイバーの有理鎖連結性、単連結性、零サイクルのChow群やDu Boisコホモロジーの消滅が共通の枠組みから導かれる。さらに層別の構造と整数係数の重みへ応用する。

## 背景と問題設定

多様体は複素数体上の準射影多様体とする。$X$がklt型であるとは、境界$\mathbb Q$因子$\Delta$が存在して$(X,\Delta)$がkltになることをいう。snc因子$E=\bigcup E\_i$では、双対複体の頂点が成分、辺が二成分の交わりの連結成分に対応し、高次セルも同様に定まる。

一般の$X$の構成にはhyperresolutionを用いる。滑らかな$V$への閉埋め込みと、$E=g^{-1}(X)\_{\mathrm{red}}$がsnc因子になる埋め込み解消$g:W\to V$を取ると、

$$
D(X)\simeq D(E)
$$

として計算できる。これは個々の解消の選択を越えてホモトピー型を定める。

## 主結果

### 双対複体の剛性（Theorem B、Corollary C）

連結なklt型多様体間の支配的射影射$f:Y\to X$が有理連結な一般ファイバーを持つとする。任意の閉部分多様体$Z\subset X$に対して

$$
D(f^{-1}(Z))\simeq D(Z)
$$

となる。とくに連結なklt型多様体$X$では$D(X)$が可縮になる。IntroductionのTheorem Aは先行研究の結果であり、本論文の新しい主張と区別される。

### Hodge理論との関係（Proposition D）

射影多様体について

$$
H^i(D(X),\mathbb Q)\simeq W\_0H^i(X,\mathbb Q)
$$

が成り立つ。右辺は混合Hodge構造の重み0部分である。有理特異点の場合には有理係数での可縮性が従うが、klt型の場合のホモトピー的な可縮性より弱い。

さらに$X$が等次元で$s=\dim\operatorname{Sing}(X)$なら

$$
H^i(D(X),\mathbb Q)=0\qquad
(0<i<\operatorname{depth}\mathcal O\_X-s)
$$

となる。孤立Cohen–Macaulay特異点の場合には、有理ホモロジーの意味で球面の楔和という形が得られる。

### RC不変関手の統一定理（Theorem G）

滑らかな連結多様体上の関手$F$が、有理連結な一般ファイバーを持つ支配的射影射を同型へ送るとき、RC不変と呼ぶ。その特異多様体への拡張$G=RF$に対し、Theorem Bと同じ仮定で

$$
G(f^{-1}(Z))\simeq G(Z)
$$

が成立する。双対複体は、滑らかな連結多様体を一点へ送る関手の拡張としてこの定理に含まれる。

### 閉ファイバーの幾何（Corollary H）

上の射$f$の各閉ファイバー$F$は有理鎖連結かつ単連結で、

$$
\operatorname{CH}\_0(F)\simeq\mathbb Z,\qquad
\mathbb H^i(F,\underline\Omega\_F^0)=0\quad(i>0)
$$

を満たす。$\underline\Omega\_F^0$は第0 Du Bois複体である。一般ファイバーだけでなく特異ファイバーへ結論が及び、等次元でない場合も含む。

### 層別を保つ崩壊（Theorems J, K）

滑らかな連結多様体から滑らかな曲線への支配的射影射で、一般ファイバーが有理連結、特別ファイバーの被約部分$E$がsncとする。Theorem Jは有理連結成分$E\_0$を選び、残りの層を順序付きの組$(Z\_i,W\_i)$へ分ける。$Z\_i$は$W\_i$の因子で、両者のMRC底は双有理であり、$W\_i$に含まれる層はそれ以前の組までに現れる。

この順序が双対複体の基本崩壊を可能にし、最終的に$E\_0$の頂点まで崩壊させる。単に可縮であるという以上に、有理連結性の幾何を保存する構造である。

Theorem Kはklt型$X$の既約部分多様体$Z$に対し、逆像がsncとなる解消を選び、$Z$を支配する層について同様の構造を与える。最後に残る成分から$Z$への一般ファイバーは有理連結である。$X$が$\mathbb Q$-factorialなら、この性質は該当するすべての解消で成立する。

### 整数係数の重み（Corollary L）

射影klt型多様体に対し、

$$
H^i(X,\mathbb Z)\text{ の重みは }\min\lbrace 2,i\rbrace \text{ 以上}
$$

となる。有理係数の既知の消滅を整数係数へ精密化する結果である。Introductionは負のK群への関連も紹介するが、そこで引用する具体的なK理論の応用はPopa・Shenとの別の共同研究の成果として区別している。

## 証明の見取り図

hyperresolutionによって滑らかな空間上の関手を特異空間へ拡張し、埋め込み解消でも計算できる柔軟性を確保する。剛性の証明では、先行研究の双対複体の議論に着想を得て、適切に選んだ極小モデルプログラムを解析する。その過程で有理連結方向への不変性だけを使うため、双対複体以外の関手にも議論が広がる。層の細かな追跡は、MRC底を保つ組分けと双対複体の崩壊をもたらす。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.30608)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.30608v1) — Section A、PDF pp. 1–6。
- **Introduction中で言及された主要結果:** Theorems B, G, J, K、Corollaries C, H, L、Proposition D。Theorem Aは先行研究。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.30608v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
